import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from '.';

storiesOf('my Button', module).add('default', () => <Button>{'Button'}</Button>);
