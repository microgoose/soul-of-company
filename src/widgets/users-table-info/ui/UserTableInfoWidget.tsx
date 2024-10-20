import {getAllUsers, UsersList} from "@/entities/user";
import {useEffect, useState} from "react";
import {ButtonState, ButtonWithIcon, PrimaryButton, SecondaryButton} from "@/shared/ui/button";
import BasketIcon from '@/shared/assets/icons/basket-icon.svg?react';

export const UserTableInfoWidget = () => {
    const [users, setUsers] = useState<UsersList>([]);

    useEffect(() => {
        getAllUsers().then((list) => setUsers(list));
    }, []);

    return (
        <div>
            <PrimaryButton>Кнопка</PrimaryButton>
            <SecondaryButton>Кнопка</SecondaryButton>
            <ButtonWithIcon state={ButtonState.ACTIVE}>
                <BasketIcon/>
                <span>Добавить пользователя</span>
            </ButtonWithIcon>
            {JSON.stringify(users)}
        </div>
    );
};