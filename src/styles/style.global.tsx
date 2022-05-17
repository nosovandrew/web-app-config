import { createGlobalStyle } from 'styled-components';

import { media } from './media';

const GlobalStyle = createGlobalStyle`
    :root {
        // mobile size (default)
        --font-sans: 'DM Sans', 'Roboto', -apple-system, system-ui, BlinkMacSystemFont, 'Helvetica Neue',
        'Helvetica', sans-serif;
        
        ${media.lg} {
            // desktop size
        }
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overscroll-behavior-x: none;
        font-family: var(--font-sans);
        /* font-size: var(--basic-font-size);
        font-weight: var(--basic-font-weight);
        background-color: var(--bg-primary);
        color: var(--text-primary); */
    }

    a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // outline light by press on mobile
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyle;
