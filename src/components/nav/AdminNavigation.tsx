import { useQueryClient } from '@tanstack/react-query';

export default function AdminNavigation() {
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    queryClient.invalidateQueries({ queryKey: ['user'] });
  }

  return (
    <button
      className="bg-gradient-to-r from-[#BCA88D] to-[#BCA88D] 
                 text-[#F1F0E4] uppercase font-bold text-sm 
                 px-4 py-2 rounded-xl shadow-md 
                 hover:from-[#a38f71] hover:to-[#c0ad91] 
                 hover:shadow-lg hover:scale-105 
                 active:scale-95 transition-all duration-200"
      onClick={logout}
    >
      Cerrar Sesión
    </button>
  );
}
