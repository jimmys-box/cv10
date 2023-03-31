import { useLocalStorage } from '../../functions/connexion';
import LogistiqueGmsEquipe from '../../composants/planning/gms/planningGmsCollaborateur'

export default function PlanningGmsEquipe1() {
  const role: any = useLocalStorage('userRole');

  return (
    <div className="customContent">
      {role[0] === 'administrator' ? (
        <LogistiqueGmsEquipe />
      ) : (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Vous n&apos;avez pas les droits pour accéder à cette page</h2>
        </div>
      )}
    </div>
  )

}
