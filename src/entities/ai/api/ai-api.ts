import {api} from "@/app/api.ts";
import {AiApi} from "@/shared/types/entities/ai-api.types.ts";

export const getAiApis = (): Promise<AiApi[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(api.get<AiApi[]>('db/ai-apis.json').json());
        }, 350);
    });
};

export const activateAiApi = (aiApi: AiApi): Promise<AiApi> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() * 10 > 5) {
                resolve(aiApi);
            } else {
                reject(new Error(""));
            }
        }, 350);
    });
};

export const deactivateAiApi = (aiApi: AiApi): Promise<AiApi> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() * 10 > 5) {
                resolve(aiApi);
            } else {
                reject(new Error(""));
            }
        }, 350);
    });
};