import React from 'react';
import { render } from '@testing-library/react';

import Badge from './Badge';

describe("Badge", () => {
    test("renders the Badge component", () => {
        render(<Badge state='success' fill={true}></Badge>)
    })
})