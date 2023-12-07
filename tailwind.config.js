/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                "custom-strongCyan": "hsl(171, 66%, 44%)",
                "custom-lightBlue": "hsl(233, 100%, 69%)",
                "custom-darkGrayishBlue": "hsl(210, 10%, 33%)",
                "custom-grayishBlue": "hsl(201, 11%, 66%)",
            },
            fontFamily: {
                custom: '"Bai Jamjuree"',
            },
            backgroundImage: {
                mobile: "url('./images/bg-header-mobile.png')",
                desktop: "url('./images/bg-header-desktop.png')",
            },
        },
    },
    plugins: [],
};
