const formatDate = (): string => {
    // formats to yyyy-mm-dd
    const dateStr = new Date();
    const rawDay = dateStr.getDate();
    const rawMonth = dateStr.getMonth() + 1;
    const year = dateStr.getFullYear();

    const day = rawDay < 10 ? `0${rawDay}` : `${rawDay}`;
    const month = rawMonth < 10 ? `0${rawMonth}` : `${rawMonth}`;

    return `${year}-${month}-${day}`;
}

export default formatDate;