export const Form = () => {
    const onSubmit = (event: any) => {
        event.preventDefault();
        // Validate form data
        // ...

        const target = event.target;

        const data = {
            name: target.name.value,
            email: target.email.value,
            password: target.password.value,
            confirmPassword:target.confirmPassword.value,
            conditionsAccepted: target.conditionsAccepted.checked,
        };

        console.log(data);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" />
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
            <div className="field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="field">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input type="password" id="confirmPassword" />
            </div>
            <div className="field checkbox">
                <input type="checkbox" id="conditionsAccepted" />
                <label htmlFor="conditionsAccepted">I agree to the terms and conditions</label>
            </div>
            <button type="submit">Sign up</button>
        </form>
    );
};
