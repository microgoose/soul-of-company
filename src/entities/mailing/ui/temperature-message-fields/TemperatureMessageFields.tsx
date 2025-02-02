import {TemperatureMessage} from "@/shared/types/entities";
import {Input} from "@/shared/ui/input";
import {t} from "i18next";
import {Controller, useFormContext} from "react-hook-form";

export const TemperatureMessageFields = () => {
    const { control, formState: { errors } } = useFormContext<TemperatureMessage>();

    return (
       <>
           <Controller name={`minTemperature`} control={control} render={({field}) =>
               <Input
                   type='number'
                   error={errors.minTemperature?.message}
                   label={t('temperatureMessage.label.minTemperature')}
                   placeholder={t('temperatureMessage.actions.enterMinTemperature')}
                   postfix='С°'
                   {...field}
               />
           }/>

           <Controller name={`maxTemperature`} control={control} render={({field}) =>
               <Input
                   type='number'
                   error={errors.maxTemperature?.message}
                   label={t('temperatureMessage.label.maxTemperature')}
                   placeholder={t('temperatureMessage.actions.enterMaxTemperature')}
                   postfix='С°'
                   {...field}
               />
           }/>

           <Controller name={`message`} control={control} render={({field}) =>
               <Input
                   error={errors.message?.message}
                   label={t('temperatureMessage.label.message')}
                   placeholder={t('temperatureMessage.actions.enterMessage')}
                   {...field}
               />
           }/>
       </>
    );
};