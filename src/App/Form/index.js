import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Header, Fieldset, Legend, LabelText, Field, Button, Container } from "./styled"
import Clock from "./Clock";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
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
                                {currencies.map((currency => (
                                    <option
                                        key={currency.short}
                                        value={currency.short}
                                    >
                                        {currency.name}
                                    </option>
                                )))}
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
