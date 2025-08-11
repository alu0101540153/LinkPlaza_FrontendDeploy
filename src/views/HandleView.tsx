import { Navigate, useParams} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { getUserByHandle } from '../api/DevTreeAPI';
import HandleData from '../components/HandleData';

export default function HandleView() {
  const params = useParams<{ handle: string }>();
  const handle = params.handle!
  const {data, error, isLoading} = useQuery({
    queryFn: () => getUserByHandle(handle),
    queryKey: ['handle', handle],
    retry: 1,
  })
  
  if(isLoading) return <div>Cargando...</div>
  if(error) return <Navigate to={'/404'}  />


  if(data) return <HandleData data={data} />
}
