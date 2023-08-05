import React from 'react'

export default function Alert(propes) {
    return (
        propes.alert && <div class={`alert alert-${propes.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{propes.alert.type}</strong> : {propes.alert.message}
        </div>
    );
}