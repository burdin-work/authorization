import { Redirect } from 'react-router-dom';
import React from 'react';

const Profile = ({ isAuth }) => {
    if (!isAuth) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="profileInfo container">

            <h1>Lorem ipsum dolor</h1>
            <p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur magni natus quasi veniam! Iure, molestias, nesciunt. Dolorem doloremque fuga illum ipsam neque, nisi non numquam, reiciendis, repellendus suscipit temporibus.</span>
                <span>Aspernatur at, aut earum magnam maiores odit perferendis rem repellendus? A, architecto assumenda deserunt doloribus illo iusto maxime minima necessitatibus porro quia reprehenderit, repudiandae saepe sit temporibus vitae voluptates, voluptatibus!</span>
                <span>Debitis dolorum explicabo fuga itaque necessitatibus non, velit vitae? Aliquid at delectus deleniti dolore dolores doloribus dolorum enim explicabo facere harum in minus officia quidem quos similique temporibus voluptatem, voluptatibus!</span>
                <span>Debitis dolorum explicabo fuga itaque necessitatibus non, velit vitae? Aliquid at delectus deleniti dolore dolores doloribus dolorum enim explicabo facere harum in minus officia quidem quos simislique temporibus voluptatem, voluptatibus!</span>
                <span>Debitis dolorum explicabo fuga itaque necessitatibus non, velit vitae? Aliquid at delectus deleniti dolore dolores doloribus dolorum enim explicabo facere harum in minus officia quidem quos similique temporibus voluptatem, voluptatibus!</span>
                <span>Debitis dolorum explicabo fuga itaque necessitatibus non, velit vitae? Aliquid at delectus deleniti dolore dolores doloribus dolorum enim explicabo facere harum in minus officia quidem quos similique temporibus voluptatem, voluptatibus!</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur magni natus quasi veniam! Iure, molestias, nesciunt. Dolorem doloremque fuga illum ipsam neque, nisi non numquam, reiciendis, repellendus suscipit temporibus.</span>
                <span>Aspernatur at, aut earum magnam maiores odit perferendis rem repellendus? A, architecto assumenda deserunt doloribus illo iusto maxime minima necessitatibus porro quia reprehenderit, repudiandae saepe sit temporibus vitae voluptates, voluptatibus!</span>
                <span>Debitis dolorum explicabo fuga itaque necessitatibus non, velit vitae? Aliquid at delectus deleniti dolore dolores doloribus dolorum enim explicabo facere harum in minus officia quidem quos similique temporibus voluptatem, voluptatibus!</span>
                <span>Debitis dolorum explicabo fuga itaque necessitatibus non, velit vitae? Aliquid at delectus deleniti dolore dolores doloribus dolorum enim explicabo facere harum in minus officia quidem quos similique temporibus voluptatem, voluptatibus!</span>
                <span>Debitis dolorum explicabo fuga itaque necessitatibus non, velit vitae? Aliquid at delectus deleniti dolore dolores doloribus dolorum enim explicabo facere harum in minus officia quidem quos similique temporibus voluptatem, voluptatibus!</span>
                <span>Debitis dolorum explicabo fuga itaque necessitatibus non, velit vitae? Aliquid at delectus deleniti dolore dolores doloribus dolorum enim explicabo facere harum in minus officia quidem quos similique temporibus voluptatem, voluptatibus!</span>
            </p>

        </div>
    );
};

export default Profile;
