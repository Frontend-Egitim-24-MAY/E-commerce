# Typescript ile komponent kullanımı

## Component tipi belirleme

1.

```javascript

type Type = {
    name: string;
    age: number
}

export const Component:React.FC<Type> = () => {
    return (
        ...
    )
}
```

2.

```javascript
export const Component = (
    {   name,
        age
    } :
    {
        name: string,
        age: number
    }) => {
    return (
        ...
    )
}
```

3.

```javascript
export const Component = (props: Type) => {
    return (
        ...
    )
}
```
