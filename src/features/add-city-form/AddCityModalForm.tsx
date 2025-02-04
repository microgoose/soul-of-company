import {CityFields, CityForm} from "@/entities/city/ui/city-form/CityForm.tsx";
import {City} from "@/shared/types/entities";
import {DoneStage, ModalForm, StageForm} from "@/shared/ui/form";
import {t} from "i18next";
import {useCallback, useEffect, useState} from "react";

interface CreateCityModalFormProps {
    isOpen: boolean,
    onSubmit: (city?: City) => void,
}

const defaultValues = {
    name: ''
};

export const AddCityModalForm = ({ isOpen, onSubmit }: CreateCityModalFormProps) => {
    const [city, setCity] = useState<City | null>(null);
    const [stage, setStage] = useState(0);

    const handleSubmit = useCallback((cityFields: CityFields) => {
        onSubmit({
            id: 1,
            ...cityFields,
        });
    }, [onSubmit]);

    const handleClose = useCallback(() => {
        if (city) {
            onSubmit(city);
            setCity(null);
        } else {
            onSubmit();
        }
    }, [city, onSubmit]);

    useEffect(() => {
        if (stage == 1 && city) {
            setTimeout(() => handleClose(), 2000);
        }
    }, [city, handleClose, stage]);

    useEffect(() => {
        if (isOpen) {
            setStage(0);
        }
    }, [isOpen]);
    
    return (
        <ModalForm title={t('forms.createCity')} isOpen={isOpen} onClose={handleClose}>
            <StageForm stage={stage} stages={[
                <CityForm
                    defaultValues={defaultValues}
                    submitText={t('actions.create')}
                    onSubmit={handleSubmit}
                />,

                <DoneStage message={t('forms.userCreated')}/>
            ]}/>
        </ModalForm>
    );
}