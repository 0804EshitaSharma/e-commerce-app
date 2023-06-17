import { StyledFilter } from "../../Styles/Filter.styled"
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from "../Redux/filterReduxActions";

export default function Filter(props) {
    const dispatch = useDispatch()

    const handleCheck = (category) => (event) => {
        if (event.target.checked) {
            dispatch(addFilter({category: category, value: event.target.value}))
        } else {
            dispatch(removeFilter({category: category, value: event.target.value}))
        }
    }

    return (
        <div className="horizontal-container">
            <input style={{ width: 'unset' }} value={props.name} type="checkbox" onChange={handleCheck(props.category)}/>
            <StyledFilter>
                {props.name}
            </StyledFilter>
        </div>
        
    )
}