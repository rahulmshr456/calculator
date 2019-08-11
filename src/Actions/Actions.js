export const Del = val => ({
    type: 'delete',
    val: val
})

export const Append = val => ({
    type: 'append',
    val: val
})

export const Dec = val => ({
    type: 'decimal',
    val: val
})


export const Reset = val => ({
    type: 'reset'
})

export const Operator = val => ({
    type: 'operator',
    val: val
})

export const Equ = val => ({
    type: 'equal'
})