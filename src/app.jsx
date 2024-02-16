import {Provider} from "./provider/provider.jsx";
import {CustomNotifications} from "./notification/custom-notification.jsx";
import {Routers} from "./routers/routers.jsx";

export const App = () => {

    return (
        <div className={`overflow-auto bg-red-950`}>
            <Provider>
                <CustomNotifications/>
                <Routers/>
            </Provider>
        </div>
    )
}
