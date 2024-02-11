import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Header, Fieldset, Legend, LabelText, Field, Button, Container, Loading, Failure } from "./styled"
import Clock from "./Clock";
import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <>
            <Header>Przelicznik walut</Header>
            <form onSubmit={onSubmit}>
                <Fieldset>
                    <Legend>Kalkulator</Legend>
                    {ratesData.state === "loading" ? (
                        <Loading>
                            Chwileczkę... <br /> Ładuję kursy walut...
                        </Loading>
                    ) : ratesData.state === "error" ? (
                        <Failure>
                            Coś poszło nie tak. Sprawdź swoje połączenie z
                            internetem lub spróbuj ponownie za chwilę.
                        </Failure>
                    ) : (
                        <>
                            <p>
                                <Clock />
                                <Container>
                                    <LabelText>Kwota w zł*:</LabelText>
                                    <Field
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        placeholder="Wpisz kwotę w złotówkach"
                                        type="number"
                                        required
                                        min="1"
                                    />
                                </Container>
                            </p>
                            <p>
                                <Container>
                                    <LabelText>Wybierz walutę:</LabelText>
                                    <Field
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.rates).map((currency) => (
                                            <option
                                                key={currency.short}
                                                value={currency.short}
                                            >
                                                {currency.name}
                                            </option>
                                        ))}
                                    </Field>
                                </Container>
                            </p>
                            <p>
                                <Button><strong>Przelicz</strong></Button>
                            </p>
                            <p>
                                <i>Pola wymagane oznaczone są *</i>
                            </p>
                            <Result result={result} />
                        </Fieldset>
            </form>
        </>
    );
};
