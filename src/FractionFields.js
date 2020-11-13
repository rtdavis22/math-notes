import {B, Frac, Textrm} from './math/sub.js';
import {Mathbb} from './math/mathbb.js';

function FractionFields() {
  return (
    <div>
      <p>
        A <strong>zero divisor</strong> of a ring is a nonzero element \(a\) for which \(ab = 0\) for some other nonzero element \(b\).
	An <strong>integral domain</strong>, or just a domain, is a nonzero ring with no zero divisors.
      </p>
      <p>
        An integral domain satisfies the cancellation law:
        \[ <Textrm>if </Textrm>ab = ac<Textrm> and </Textrm> a \neq 0<Textrm>, then </Textrm> b = c. \]
      </p>
      <p>
        Examples of integral domains include any subring of a field and the polynomial ring \(R[x]\) when \(R\) is an integral domain.
        A non-example is \(<Mathbb>Z</Mathbb>/4<Mathbb>Z</Mathbb>\).
      </p>
      <p>
        Any integral domain \(R\) can be embedded in a field \(F\) called the <strong>fraction field</strong> or <strong>quotient field</strong> of \(R\) which is constructed as follows.
        Define a fraction to be a symbol \(<Frac><>a</><>b</></Frac>\) where \(a\) and \(b\) are in \(R\) and \(b \neq 0\).
        Let \(F\) be the set of equivalence classes of fractions, where \(<Frac><>a_1</><>b_1</></Frac>\) and \(<Frac><>a_2</><>b_2</></Frac>\) are equivalent if \(a_1b_2 = a_2b_1\).
        Sums and products are given by \(<Frac><>a</><>b</></Frac> + <Frac><>c</><>d</></Frac> = <Frac><>ad + bc</><>bd</></Frac>\) and \(<Frac><>a</><>b</></Frac><Frac><>c</><>d</></Frac> = <Frac><>ac</><>bd</></Frac>\).
        There is an injection from \(R\) to \(F\) which sends an element \(a\) to \(<Frac><>a</><>1</></Frac>\).
      </p>
      <p>
        Furthermore, the fraction field \(F\) is the smallest field containing \(R\) in the following sense.
	If there is an injection from \(R\) to another field \(F'\), then there is an injection from \(F\) to \(F'\) which sends \(<Frac><>a</><>b</></Frac>\) to \(ab^<B>-1</B>\).
	In other words, the map \(R \to F'\) "factors through" the quotient field \(F\).
        It's straightforward to check that this mapping is indeed a homomorphism of rings.
	Its kernel is an ideal of \(F\) so it must be trivial.
      </p>
    </div>
  );
}

export default FractionFields;
