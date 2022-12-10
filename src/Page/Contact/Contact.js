import React from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_tps3wnq";
const TEMPLATE_ID = 'react_contact_form';
const USER_ID = "2bPdiJuUidhsPXVq6";

const Contact = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <div className='my-12 w-1/2 mx-auto'>

            <h3>
                As a fresher, i would appreciate if you could give an opportunity or have any queries, feel free to reach me.
            </h3>
            <Form onSubmit={handleOnSubmit}>
                <Form.Field

                    id='form-input-control-email'
                    control={Input}
                    label='Email'

                    name='user_email'
                    placeholder='Email…'
                    required
                    icon='mail'
                    iconPosition='left'
                />
                <Form.Field

                    id='form-input-control-last-name'
                    control={Input}
                    label='Name'
                    name='user_name'
                    placeholder='Name…'
                    required
                    icon='user circle'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    name='user_message'
                    placeholder='Message…'
                    required
                />
                <button type='submit' className="btn btn-success">Send to reach me</button>
                {/* <Button type='submit' color='green'>Send</Button> */}
            </Form>

        </div>
    );
};

export default Contact;

