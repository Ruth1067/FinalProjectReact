import { FormEvent, useRef, useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import apiService from "../ApiService";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Register = () => {
    const [showForm, setShowForm] = useState(false);
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phonenumberRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await apiService.register(
                usernameRef.current?.value || '',
                passwordRef.current?.value || '',
                emailRef.current?.value || '',
                phonenumberRef.current?.value || ''
            );
            alert('המשתמש נרשם בהצלחה!');
            setShowForm(false);
        } catch (error) {
            alert('הרשמה נכשלה');
        }
    };

    return (
        <>
            <Button onClick={() => { setShowForm(true) }}>register</Button>
            <Modal open={showForm} onClose={() => setShowForm(false)} disableScrollLock>
                <Box sx={style}>
                    <TextField label="Username" inputRef={usernameRef} />
                    <TextField label="Password" type="password" inputRef={passwordRef} />
                    <TextField label="Email" inputRef={emailRef} />
                    <TextField label="Phone" inputRef={phonenumberRef} />
                    <Button onClick={handleSubmit}>Submit</Button>
                </Box>
            </Modal>
        </>
    );
};

export default Register;
