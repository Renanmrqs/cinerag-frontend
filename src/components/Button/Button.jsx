function Button ( {variant, children, onclick} ) {
    // const variantBtn[variant, SetVariante]
    return (
    <button className={variant} onClick={onclick}>
        {children}
    </button>
    )
}

export default Button