import {getTemperatureMessages} from "@/entities/mailing";
import {TemperatureMessage} from "@/shared/types/entities";
import {useState} from "react";

export interface UseTemperatureMessagesController {
    messages: TemperatureMessage[]
    isLoading: boolean;
    error: Error | null;
    load: () => void;
    add: (message: TemperatureMessage) => void;
    remove: (message: TemperatureMessage) => void;
    update: (message: TemperatureMessage) => void;
}

export const useTemperatureMessagesController = (): UseTemperatureMessagesController => {
    const [messages, setMessages] = useState<TemperatureMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const load = () => {
        setIsLoading(true);
        setError(null);

        getTemperatureMessages()
            .then(setMessages)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    const add = (message: TemperatureMessage) => {
        setMessages([message, ...messages]);
    };

    const remove = (message: TemperatureMessage) => {
        setMessages(messages.filter(item => item.id !== message.id));
    };

    const update = (message: TemperatureMessage) => {
      setMessages(messages.map((item) => {
          if (item.id === message.id) {
              return message;
          }
          return item;
      }));
    };

    return { messages, isLoading, error, load, add, remove, update };
}