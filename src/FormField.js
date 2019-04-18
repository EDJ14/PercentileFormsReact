// SurveyField contains logic to render a single label and text input
import React from 'react';

export default () => {
  return (
    <div>
      <label className="form__label" htmlFor="email">
        Your Email{' '}
        <span
          className="form__tooltip"
          data-tooltip="Please enter your email address"
        >
          ?
        </span>
      </label>
      <input className="form__text" type="email" id="email" name="email" />
    </div>
  );
};
