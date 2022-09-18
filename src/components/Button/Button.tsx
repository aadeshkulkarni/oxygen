import React, { useState, useEffect } from 'react';
import './Button.scss'
export interface ButtonProps {
    href?: string
    type?: string
    disabled?: Boolean
    rounded?: Boolean
    theme?: string
    size?: string
    focused?: Boolean
    showProgress?: Boolean
    stroke?: Boolean
    children: React.ReactNode
}

const Button = (props: ButtonProps) => {
    const [showProgress, setShowProgress] = useState(false);
    const [icon, setIcon] = useState('');
        function generateClasses(){
            let classes='';
            if(props.rounded){
                classes=`${classes} n-button-rounded`;
            } 
            if(props.theme==='primary'){
                classes=`${classes} n-button-primary`;
            } 
            if(props.theme==='secondary'){
                classes=`${classes} n-button-secondary`;
            } 
            if(props.size==='large'){
                classes=`${classes} n-button-large`;
            } 
            if(props.size==='medium'){
                classes=`${classes} n-button-medium`;
            } 
            if(props.size==='small'){
                classes=`${classes} n-button-small`;
            } 
            if(props.focused){
                classes=`${classes} n-button-focused`;
            } 
            if(props.stroke){
                if(props.theme==='primary'){
                    classes=`${classes} n-button-stroke n-button-stroke-primary`;
                }
                else{
                    classes=`${classes} n-button-stroke n-button-stroke-secondary`;
                }
            }
            else{
                if(props.theme==='primary'){
                    classes=`${classes} n-flat-button n-flat-button-primary`;
                }
                else{
                    classes=`${classes} n-flat-button n-flat-button-secondary`;
                }
            }
            return classes;
        }
        
        //     attrs: {
        //         href: this.href,
        //         disabled: this.disabled,
        //         type: !this.href && (this.type || 'button')
        //     },
        //     on: {
        //         ...this.$listeners,
        //     }
        // }  

    return <button className={`n-button ripple n-button-content ${generateClasses()} ${showProgress && 'disable-click'}`}>
        {icon && <div className="social-icon" >
            {icon == 'facebook' && <img src="./../../assets/facebook-icon.png" />}
        </div>}

        {!showProgress && props.children}
        {showProgress && <div className="n-btn-spin">
            <img className="n-btn-spinner" style={{ width: "50px" }} src="https://raw.githubusercontent.com/gofynd/nitrozen-vue/master/src/assets/loader-white.gif" />
        </div>}
    </button>
}

export default Button;