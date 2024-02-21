import { useState } from "react"

export const useToggle = (initialValue: boolean):[boolean, ()=> void, React.Dispatch<React.SetStateAction<boolean>>]=>{
        const [isToggle,setisToogle] =useState(initialValue || false);

        const onToggle = () => setisToogle(!isToggle);
        return [isToggle,onToggle, setisToogle];
}