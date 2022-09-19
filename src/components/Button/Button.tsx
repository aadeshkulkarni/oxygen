import React, { useState } from 'react';
import './Button.scss'
export interface ButtonProps {
    href?: string
    type?: string
    disabled?: boolean
    rounded?: boolean
    theme?: string
    size?: string
    focused?: boolean
    showProgress?: boolean
    stroke?: boolean
    children: React.ReactNode
}

const Button = (props: ButtonProps) => {
    const [showProgress, setShowProgress] = useState(props.showProgress || false);
    const [icon, setIcon] = useState('');
    function generateClasses() {
        let classes = '';
        if (props.rounded) {
            classes = `${classes} n-button-rounded`;
        }
        if (props.theme === 'primary') {
            classes = `${classes} n-button-primary`;
        }
        if (props.theme === 'secondary') {
            classes = `${classes} n-button-secondary`;
        }
        if (props.size === 'large') {
            classes = `${classes} n-button-large`;
        }
        if (props.size === 'medium') {
            classes = `${classes} n-button-medium`;
        }
        if (props.size === 'small') {
            classes = `${classes} n-button-small`;
        }
        if (props.focused) {
            classes = `${classes} n-button-focused`;
        }
        if (props.stroke) {
            if (props.theme === 'primary') {
                classes = `${classes} n-button-stroke n-button-stroke-primary`;
            }
            else {
                classes = `${classes} n-button-stroke n-button-stroke-secondary`;
            }
        }
        else {
            if (props.theme === 'primary') {
                classes = `${classes} n-flat-button n-flat-button-primary`;
            }
            else {
                classes = `${classes} n-flat-button n-flat-button-secondary`;
            }
        }
        return classes;
    }
    // function generateAttributes(){
    //     let attrs={}
    //     if(props.disabled){
    //         attrs.disabled=true;
    //     }
    //     if(props.href){
    //         attrs.href=props.href;
    //     }
    //     if(props.type){
    //         attrs.type=props.type;
    //     }
    //     return {...attrs};
    // }
    //     attrs: {
    //         href: this.href,
    //         disabled: this.disabled,
    //         type: !this.href && (this.type || 'button')
    //     },
    //     on: {
    //         ...this.$listeners,
    //     }
    // }  


    return <button disabled={props.disabled || false} className={`n-button ripple ${generateClasses()} ${showProgress && 'disable-click'}`}>
        <div className=" n-button-content">
            {icon && <div className="social-icon" >
                {icon == 'facebook' && <img src="./../../assets/facebook-icon.png" />}
            </div>}

            {!showProgress && props.children}
            {showProgress && <div className="n-btn-spin">
                <img className="n-btn-spinner" style={{ width: "50px" }} src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/src/assets/loader-white.gif" />
            </div>}
        </div>
    </button>
}

export default Button;