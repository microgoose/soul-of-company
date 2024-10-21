import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from "@/app/App.tsx";
import {t} from "i18next";

document.title = t('projectName');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
