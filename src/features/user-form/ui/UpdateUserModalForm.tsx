import {DoneStage, ModalForm, StepForm} from "@/shared/ui/form";
import {User, UserForm, UserFormFields} from "@/entities/user";
import {t} from "i18next";
import {useCallback, useEffect, useMemo, useState} from "react";
import {formatDate, toDate} from "@/shared/utils/date-utils.ts";
import {useUserFormFieldsData} from "@/features/user-form/model/use-user-form-field-data.ts";
import {getRolesByIds} from "@/entities/role/api/role-api.ts";
import {getCitiesByIds} from "@/entities/city/api/city-api.ts";

interface UpdateUserModalFormProps {
    user: User,
    isOpen: boolean,
    onClose: (user?: User) => void,
}

export const UpdateUserModalForm = ({ isOpen, onClose, user }: UpdateUserModalFormProps) => {
    const { rolesOptions, citiesOptions } = useUserFormFieldsData();
    const [step, setStep] = useState(0);
    const defaultValues = useMemo(() => {
        const roles = user.roles.map(role => role.id);
        const cities = user.cities.map(city => city.id);

        return {
            ...user,
            roles,
            cities,
            birthday: formatDate(user.birthday),
            hiringDate: formatDate(user.hiringDate),
        };
    }, [user]);

    const handleSubmit = useCallback(async (userFields: UserFormFields) => {
        const roles = await getRolesByIds(userFields.roles);
        const cities = await getCitiesByIds(userFields.cities);

        onClose({
            ...user,
            ...userFields,
            roles,
            cities,
            birthday: toDate(userFields.birthday),
            hiringDate: toDate(userFields.hiringDate),
        });

        setStep(step => step + 1);
    }, [onClose, user]);

    useEffect(() => {
        if (isOpen) {
            setStep(0);
        }
    }, [isOpen]);

    return (
        <ModalForm title={t('forms.editUser')} isOpen={isOpen} onClose={onClose}>
            <StepForm step={step} steps={[
                <UserForm
                    rolesOptions={rolesOptions}
                    citiesOptions={citiesOptions}
                    defaultValues={defaultValues}
                    onSubmit={handleSubmit}
                />,

                <DoneStage message={t('forms.userUpdated')} />
            ]}/>
        </ModalForm>
    );
}