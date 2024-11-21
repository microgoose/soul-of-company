import {DoneStage, ModalForm, StepForm} from "@/shared/ui/form";
import {User, UserForm, UserFormFields} from "@/entities/user";
import {t} from "i18next";
import {useUserFormFieldsData} from "@/features/user-form/model/use-user-form-field-data.ts";
import {useCallback, useEffect, useState} from "react";
import {toDate} from "@/shared/utils/date-utils.ts";
import {getRolesByIds} from "@/entities/role/api/role-api.ts";
import {getCitiesByIds} from "@/entities/city/api/city-api.ts";

interface CreateUserModalFormProps {
    isOpen: boolean,
    onClose: (user?: User) => void,
}

const defaultValues = {
    roles: [],
    cities: [],
    telegramId: '',
    login: '',
    fio: '',
    phone: '',
    birthday: '',
    hiringDate: ''
};

export const CreateUserModalForm = ({ isOpen, onClose }: CreateUserModalFormProps) => {
    const { rolesOptions, citiesOptions } = useUserFormFieldsData();
    const [step, setStep] = useState(0);

    const handleSubmit = useCallback(async (userFields: UserFormFields) => {
        const roles = await getRolesByIds(userFields.roles);
        const cities = await getCitiesByIds(userFields.cities);

        onClose({
            id: null,
            ...userFields,
            roles,
            cities,
            birthday: toDate(userFields.birthday),
            hiringDate: toDate(userFields.hiringDate),
            blocked: null,
        });

        setStep(step => step + 1);
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            setStep(0);
        }
    }, [isOpen]);
    
    return (
        <ModalForm title={t('forms.createUser')} isOpen={isOpen} onClose={onClose}>
            <StepForm step={step} steps={[
                <UserForm
                    rolesOptions={rolesOptions}
                    citiesOptions={citiesOptions}
                    defaultValues={defaultValues}
                    onSubmit={handleSubmit}
                />,

                <DoneStage message={t('forms.userCreated')}/>
            ]}/>
        </ModalForm>
    );
}