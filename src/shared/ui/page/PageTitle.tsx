import {useLocation} from "react-router-dom";
import {useEffect} from "react";

interface PageTitleProps {
    title: string
}

export const PageTitle = ({ title }: PageTitleProps) => {
    const location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [location, title]);

    return null;
};