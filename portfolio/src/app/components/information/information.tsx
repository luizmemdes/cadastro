import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Advanced</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          
          <span>💻 4th semester of systems analysis and development - Senac</span>
          <div></div>
          <span>🌐 Studying English at influx</span>
        </div>
      </div>
    )
}