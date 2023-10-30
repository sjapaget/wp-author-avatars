export default function RolesCheckBoxes( { attributes } ) {

    const role = ('role' in attributes) ? attributes.role : new Object;

    return wp.compose.withState({
        checked_obj: Object.assign(new Object, role)
    })(({checked_obj, setState}) => (
        <ul>
            {
                user_roles?.map((v) => (
                    <li key={v.value}><CheckboxControl
                        className="check_items"
                        label={v.label}
                        checked={checked_obj[v.value]}
                        onChange={(check) => {
                            check ? checked_obj[v.value] = true : delete checked_obj[v.value]
                            setAttributes({role: checked_obj})
                            setState({checked_obj})
                        }}
                    /></li>
                ))
            }
        </ul>
    ));
}