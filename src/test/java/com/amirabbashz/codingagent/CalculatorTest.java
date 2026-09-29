package com.amirabbashz.codingagent;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CalculatorTest {
    @Test void addWorks() { assertEquals(5.0, Calculator.add(2.0, 3.0)); }
    @Test void subtractWorks() { assertEquals(5.0, Calculator.subtract(7.0, 2.0)); }
    @Test void multiplyWorks() { assertEquals(12.0, Calculator.multiply(4.0, 3.0)); }
}
