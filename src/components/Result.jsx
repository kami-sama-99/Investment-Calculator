import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Result({data}) {
    const result = calculateInvestmentResults(data);
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment
    return <table id="result">
    <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
    </thead>
    <tbody>
        {result.map(yearData => {
            const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
            return <tr key={yearData.year}>
                <th>{yearData.year}</th>
                <th>{formatter.format(yearData.valueEndOfYear)}</th>
                <th>{formatter.format(yearData.interest)}</th>
                <th>{formatter.format(totalInterest)}</th>
                <th>{yearData.annualInvestment}</th>
                <th></th>
            </tr>
        })}
    </tbody>
</table>

}