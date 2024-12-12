import {DoneStage, ModalForm, StageForm} from "@/shared/ui/form";
import {UserForm, UserFormFields} from "@/entities/user";
import {t} from "i18next";
import {useUserFormFieldsData} from "@/features/user/user-form/model/use-user-form-field-data.ts";
import {useCallback, useEffect, useState} from "react";
import {toDate} from "@/shared/utils/date-utils.ts";
import {getRolesByIds} from "@/entities/role/api/role-api.ts";
import {getCitiesByIds} from "@/entities/city/api/city-api.ts";
import {User} from "@/shared/types/entities";

interface CreateUserModalFormProps {
    isOpen: boolean,
    onSubmit: (user?: User) => void,
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

export const CreateUserModalForm = ({ isOpen, onSubmit }: CreateUserModalFormProps) => {
    const { rolesOptions, citiesOptions } = useUserFormFieldsData();
    const [createdUser, setCreatedUser] = useState<User | null>(null);
    const [stage, setStage] = useState(0);

    const handleSubmit = useCallback(async (userFields: UserFormFields) => {
        const roles = await getRolesByIds(userFields.roles);
        const cities = await getCitiesByIds(userFields.cities);

        setStage(step => step + 1);
        setCreatedUser({
            id: null,
            ...userFields,
            roles,
            cities,
            birthday: toDate(userFields.birthday),
            hiringDate: toDate(userFields.hiringDate),
            blocked: null,
        });
    }, []);

    const handleClose = useCallback(() => {
        if (createdUser) {
            onSubmit(createdUser);
            setCreatedUser(null);
        } else {
            onSubmit();
        }
    }, [createdUser, onSubmit]);

    useEffect(() => {
        if (stage == 1 && createdUser) {
            setTimeout(() => handleClose(), 2000);
        }
    }, [createdUser, handleClose, stage]);

    useEffect(() => {
        if (isOpen) {
            setStage(0);
        }
    }, [isOpen]);
    
    return (
        <ModalForm title={t('forms.createUser')} isOpen={isOpen} onClose={handleClose}>
            <StageForm stage={stage} stages={[
                <UserForm
                    rolesOptions={rolesOptions}
                    citiesOptions={citiesOptions}
                    defaultValues={defaultValues}
                    submitText={t('actions.create')}
                    onSubmit={handleSubmit}
                />,

                <DoneStage message={t('forms.userCreated')}/>
            ]}/>
        </ModalForm>
    );
}