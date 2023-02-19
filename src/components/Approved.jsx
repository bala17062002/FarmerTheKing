import React from 'react'
import MainHeader from './MainHeader'
import Alert from 'react-bootstrap/Alert';

export const Approved = () => {
    return (
        <div>
            <MainHeader />
            <div>
                <Alert variant="success">
                    <Alert.Heading>There are no requests which are approved</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This
                        is inform you to kindly accept according to work given to you.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Go to Pending requests and accept the tasks given to you
                    </p>
                </Alert>
            </div>
        </div>
    )
}
