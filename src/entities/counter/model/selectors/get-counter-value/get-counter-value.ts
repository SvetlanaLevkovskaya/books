import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from 'entities/counter/model/selectors/get-counter/get-counter'
import { type CounterSchema } from 'entities/counter'

export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value)
