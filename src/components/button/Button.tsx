type Props={
    text: string,
    varCol: Boolean,
}

export default function Button({text, varCol,} : Props){
    return (
        <button className={varCol ? "text-(--text) bg-(--bg) border-(--text)" : "text-(--bg) bg-(--text) border-(--bg)"} >{text}</button>
    )
}