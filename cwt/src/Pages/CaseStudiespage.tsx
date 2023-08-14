import { Counting } from '../components/Counting'
import ReadyCall from '../components/ReadyCall'
import Footer from '../components/footer'
import { CaseStudies } from '../screen/CaseStudies'
export const CaseStudiespage = () => {
  return (
    <div>
        <CaseStudies/>
        <Counting/>
        <ReadyCall/>
        <Footer />
    </div>
  )
}
