import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from "../../react-query";
import styles from "./LoginIcon.module.css";

export default function LoginIcon(props) {
   const { data: userInfo} = useUserInfo();
   const navigate = useNavigate();

   const goToProfile = () => {
      if(userInfo?.name)
         navigate("/profile")
      else
         navigate("/login?redirect=/profile");
   };

   return (

      <div onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
         {userInfo
            ? <UserOutlined className={styles.userInfoOutlined} />
            : <UserSwitchOutlined className={styles.userInfoOutlined} />
         }
         <div className={styles.userInfoText}>
            {!!userInfo?.name
               ? `${userInfo.name}`
               : ``
            }
         </div>
      </div>

   );
}
