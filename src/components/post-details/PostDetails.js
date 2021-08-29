import {useLocation} from "react-router";

export default function PostDetails() {
    const {state} = useLocation();

    return (
        <div>
            {JSON.stringify(state.body)}
        </div>
    );
}