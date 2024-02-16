import React from "react";

// export const Table = ({children})=> {
//     return <table className={`table-fixed w-full outline-none ring-0`}>{children}</table>
// }
//
// export const TableHead = ({children})=> {
//     return <thead>{children}</thead>
// }
//
// export const TableHeadRow = ({children})=> {
//     return <tr className={`bg-slate-900`}>{children}</tr>
// }
//
// export const TableHeaderDouble = ({nameOne, nameTwo})=> {
//     return <th className={`table-header`}>
//         {nameOne}<br/>{nameTwo}
//     </th>
// }
// export const TableHeaderCheckbox = ({children})=> {
//     return <th className={`table-header`}>{children}</th>
// }
// export const TableHeader = ({name})=> {
//     return <th className={`table-header`}>{name}</th>
// }
//
// export const TableBodyRow = ({children, ...props})=> {
//     return <tr className={`border-b border-gray-700
//     text-center text-white hover:bg-gray-700`}{...props}>{children}</tr>
// }
//
// export const TableBody = ({children})=> {
//     return <tbody className={`max-h-[200px] overflow-y-scroll`}>{children}</tbody>
// }
//
// export const TableData = ({name, children})=> {
//     return <td>{name}{children}</td>
// }
export const Table = ({children})=> {
    return <table className={`table-cell w-full justify-center outline-none ring-0`}>{children}</table>
}

export const TableHead = ({children})=> {
    return <div className={`table-fixed flex flex-row w-full`}>{children}</div>
}

export const TableHeadRow = ({children})=> {
    return <div className={`bg-slate-900`}>{children}</div>
}

export const TableHeaderDouble = ({nameOne, nameTwo})=> {
    return <div className={`table-header`}>
        {nameOne}<br/>{nameTwo}
    </div>
}
export const TableHeaderCheckbox = ({children})=> {
    return <div className={`table-header`}>{children}</div>
}
export const TableHeader = ({name})=> {
    return <div className={`table-header`}>{name}</div>
}

export const TableBodyRow = ({children, ...props})=> {
    return <div className={`border-b border-gray-700 
    text-center text-white hover:bg-gray-700`}{...props}>{children}</div>
}

export const TableBody = ({children})=> {
    return <div className={`max-h-[200px] overflow-y-scroll`}>{children}</div>
}

export const TableData = ({name, children})=> {
    return <div>{name}{children}</div>
}
