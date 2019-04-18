import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormField from './FormField';
import './css/form.scss';

class Form extends Component {
  render() {
    return (
      <div className="steam-signup-form">
        <div className="front">
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 294.51 91.32"
          >
            <g data-name="Layer 2">
              <g data-name="Layer 1" fill="#c2bfbd">
                <path d="M45.09 0A45.4 45.4 0 0 0 0 42l24.25 10.11a12.72 12.72 0 0 1 7.21-2.24h.71L43 34.11v-.22a17.06 17.06 0 1 1 17 17.22h-.39L44.25 62.18v.61a12.8 12.8 0 0 1-25.35 2.55L1.56 58.1a45.2 45.2 0 0 0 88.78-12.44A45.46 45.46 0 0 0 45.09 0" />
                <path d="M28.35 69.28L22.8 67a9.56 9.56 0 0 0 17.52-.47 9.73 9.73 0 0 0 0-7.42 9.63 9.63 0 0 0-5.19-5.26 9.48 9.48 0 0 0-7.08-.11l5.74 2.4a7.15 7.15 0 0 1 3.81 9.33 7.05 7.05 0 0 1-9.26 3.85M60 22.42a11.47 11.47 0 1 0 11.39 11.47A11.43 11.43 0 0 0 60 22.42zm0 20.07a8.62 8.62 0 1 1 8.54-8.62A8.58 8.58 0 0 1 60 42.49zM137.85 31.66l-2.94 5.22a14.58 14.58 0 0 0-8-2.56c-3.06 0-5 1.28-5 3.57 0 2.79 3.37 3.43 8.37 5.25 5.38 1.92 8.47 4.17 8.47 9.14 0 6.8-5.3 10.62-12.92 10.62a23.17 23.17 0 0 1-11.63-3.08l2.17-5.82a20.21 20.21 0 0 0 9.13 2.37c4 0 5.93-1.49 5.93-3.71 0-2.53-2.91-3.29-7.62-4.86-5.36-1.81-9.07-4.18-9.07-9.68 0-6.2 4.92-9.77 12-9.77a18.76 18.76 0 0 1 11.1 3.27M160.84 34.96v27.37h-6.92V34.96h-10.05v-5.99h26.99v5.99h-10.02zM185.46 34.94v7.52h13.25v5.99h-13.25v7.83h15.37v6.05h-22.29V28.97h22.29v5.97h-15.37zM222.68 36.93l-4.51 13.35h9.12zm-6.39 18.92l-2.19 6.48h-7.26L219.24 29h7L239 62.33h-7.5l-2.24-6.48zM274.49 41.86l-9.05 19.5h-3.91l-8.9-19.32v20.29H246V28.97h6.62l11.11 24.08 10.71-24.08h6.68v33.36h-6.63V41.86zM289.14 32.94h.86a.75.75 0 0 0 .83-.75c0-.42-.22-.69-.83-.69h-.81zm.86-2.14c1.18 0 1.58.64 1.58 1.32a1.35 1.35 0 0 1-.82 1.26l1.07 2H291l-.9-1.78h-.92v1.78h-.73V30.8zm-3.88 2.38a3.81 3.81 0 1 0 7.62 0 3.81 3.81 0 1 0-7.62 0m8.39 0a4.58 4.58 0 1 1-9.16 0 4.58 4.58 0 1 1 9.16 0" />
              </g>
            </g>
          </svg>
          <h1 className="title">Create your account</h1>
          <p>The ultimate entertainment platform</p>
          <p>Play, connect, create and more.</p>
          <p>
            <strong>It's free to join and easy to use.</strong>
          </p>

          <form className="form" action="">
            <Field key={'name'} name={'whatev'} component={FormField} />
            {/* <label className="form__label" htmlFor="email">
              Your Email{' '}
              <span
                className="form__tooltip"
                data-tooltip="Please enter your email address"
              >
                ?
              </span>
            </label>
            <input
              className="form__text"
              type="email"
              id="email"
              name="email"
    /> */}
            <label className="form__label" htmlFor="password">
              Password{' '}
              <span
                className="form__tooltip"
                data-tooltip="Minimum 12 characters, at least one capital and one number"
              >
                ?
              </span>
            </label>
            <input
              className="form__text"
              type="password"
              id="password"
              name="password"
            />
            <label className="form__label" htmlFor="password-reenter">
              Re-enter password
            </label>
            <input
              className="form__text"
              type="password"
              id="password-reenter"
              name="password-reenter"
            />

            <p className="fineprint flex-center">
              <input
                className="form__checkbox"
                type="checkbox"
                id="agreement"
                name="agreement"
              />
              <label htmlFor="agreement">
                I am 13 years of age or older AND agree to the{' '}
                <a href="#">terms and serivces</a>.
              </label>
            </p>
            <p>
              <img
                className="recaptcha"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/recaptcha-dark.png"
                alt=""
              />
            </p>

            <button className="button">Sign up now</button>
            <a href="#" className="fineprint">
              I already have an account
            </a>
          </form>
        </div>

        <div className="back">
          <h2 className="subheading">Why join steam?</h2>
          <ul className="list list--unstyled">
            <li>Buy and download full retail games</li>
            <li>Join the Steam Community</li>
            <li>Chat with your friends while gaming</li>
            <li>Play your games on any supported platform</li>
            <li>Schedule a game, tournament, or LAN party</li>
            <li>Receive automatic game updates, and more!</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: 'surveyForm', destroyonUnmount: false })(Form);
