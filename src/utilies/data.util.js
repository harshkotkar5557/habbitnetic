export function getFilterAraay(array, condition) {
    return [...array].filter((ele) => condition || ele)
}
