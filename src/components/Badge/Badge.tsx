import React, { useState, useEffect } from 'react';
import './Badge.scss'
export interface BadgeProps {
    state?: string,
    fill?: Boolean
}

const Badge = (props: BadgeProps) => {
        function generateClasses(){
            let classes = "";
            switch (props.state) {
              case "default":
              case "none":
                classes = "nitrozen-badge-default";
                break;
              case "info":
                classes = "nitrozen-badge-info";
                break;
              case "success":
                classes = "nitrozen-badge-success";
                break;
              case "warn":
                classes = "nitrozen-badge-warn";
                break;
              case "error":
                classes = "nitrozen-badge-error";
                break;
              case "disable":
                classes = "nitrozen-badge-disable";
                break;
      
              default:
                break;
            }
            if (props.fill) {
              classes += "-fill";
            }
            return classes;
        }

    return <div className={`nitrozen-badge ${generateClasses()}`}>
        test
    </div>
}

export default Badge;