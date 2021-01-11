import React, {useState} from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const usePasswordToggle = () => {
    const [visible, setVisibility] = useState(false);

    const Icon = (
        <FaEye
        icon ={ visible ? <FaEyeSlash /> : <FaEye />}
        onclick={() =>setVisibility( visibility => !visibility)} />
    )

    const InputType = visible ? "text" : "password";

    return [InputType, Icon]
}

export default usePasswordToggle