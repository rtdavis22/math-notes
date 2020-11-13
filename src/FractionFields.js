import m from './math/M.js';
import {Proof, Theorem} from './math/Environments.js';

function FractionFields() {
  return (
    <div>
      <p>
        A <strong>zero divisor</strong> of a ring is a nonzero element \(a\) for which \(ab = 0\) for some other nonzero element \(b\).
	An <strong>integral domain</strong>, or just a domain, is a nonzero ring with no zero divisors.
      </p>
      <p>
        An integral domain satisfies the cancellation law:
        \[ <m.textrm>if </m.textrm>ab = ac<m.textrm> and </m.textrm> a \neq 0<m.textrm>, then </m.textrm> b = c. \]
      </p>
      <p>
        Examples of integral domains include any subring of a field and the polynomial ring \(R[x]\) when \(R\) is an integral domain.
        A non-example is \(<m.mathbb>Z</m.mathbb>/4<m.mathbb>Z</m.mathbb>\).
      </p>
      <p>
        Any integral domain \(R\) can be embedded in a field \(F\) called the <strong>fraction field</strong> or <strong>quotient field</strong> of \(R\) which is constructed as follows.
        Define a fraction to be a symbol \(<m.frac><>a</><>b</></m.frac>\) where \(a\) and \(b\) are in \(R\) and \(b \neq 0\).
        Let \(F\) be the set of equivalence classes of fractions, where \(<m.frac><>a_1</><>b_1</></m.frac>\) and \(<m.frac><>a_2</><>b_2</></m.frac>\) are equivalent if \(a_1b_2 = a_2b_1\).
        Sums and products are given by \(<m.frac><>a</><>b</></m.frac> + <m.frac><>c</><>d</></m.frac> = <m.frac><>ad + bc</><>bd</></m.frac>\) and \(<m.frac><>a</><>b</></m.frac><m.frac><>c</><>d</></m.frac> = <m.frac><>ac</><>bd</></m.frac>\).
        There is an injection from \(R\) to \(F\) which sends an element \(a\) to \(<m.frac><>a</><>1</></m.frac>\).
      </p>
      <p>
        Furthermore, the fraction field \(F\) is the smallest field containing \(R\) in the following sense.
	If there is an injection from \(R\) to another field \(F'\), then there is an injection from \(F\) to \(F'\) which sends \(<m.frac><>a</><>b</></m.frac>\) to \(ab^<m.b>-1</m.b>\).
	In other words, the map \(R \to F'\) "factors through" the quotient field \(F\).
        It's straightforward to check that this mapping is indeed a homomorphism of rings.
	Its kernel is an ideal of \(F\) so it must be trivial.
      </p>
      <Theorem name="Bolzano-Weirstrass">
        An integral domain \(<m.mathbb>R</m.mathbb>^\times\) satisfies the cancellation law:
        \[ <m.textrm>if </m.textrm>ab = ac<m.textrm> and </m.textrm> a \neq 0<m.textrm>, then </m.textrm> b = c. \]
      </Theorem>
      <Proof>
        Furthermore, the fraction field \(F\) is the smallest field containing \(R\) in the following sense.
        If there is an injection from \(R\) to another field \(F'\), then there is an injection from \(F\) to \(F'\) which sends \(<m.frac><>a</><>b</></m.frac>\) to \(ab^<m.b>-1</m.b>\).
        <p>
          In other words, the map \(R \to F'\) "factors through" the quotient field \(F\).
          It's straightforward to check that this mapping is indeed a homomorphism of rings.
	</p>
	<p>
          Its kernel is an ideal of \(F\) so it must be trivial.
        </p>
      </Proof>
    </div>
  );
}

export default FractionFields;
