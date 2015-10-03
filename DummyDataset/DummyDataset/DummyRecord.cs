using System;using System.Collections.Generic;using System.Linq;using System.Text;using System.Threading.Tasks;namespace DummyDataset{       public class Toolkit    {        public int[] GetMinMaxValues(string pivotValue)        {           if(GetStringValues(pivotValue))
            {
                return new int[2] { 0, 3 };
            }           else if(pivotValue.Equals("Age"))
            {
                return new int[2] { 5, 65 };
            }           else if(pivotValue.Equals("family_history"))
            {
                return new int[2] { 0, 1 };
            }
            else if (pivotValue.Equals("lastoffset"))
            {
                return new int[2] { 0, 1 };
            }
            else
            {
                return new int[1] { -1 };
            }        }        public bool GetStringValues(string pivotValue)        {            string s = " erythema,scaling ,definite_borders ,itching ,koebner_phenomenon ,polygonal_papules ,follicular_papules , oral_mucosal_involvement , knee_and_elbow_involvement ,         scalp_involvement ,         melanin_incontinence ,        eosinophils_in_the_infiltrate ,        PNL_infiltrate ,         fibrosis_of_the_papillary_dermis ,        exocytosis ,        acanthosis ,        hyperkeratosis ,         parakeratosis ,         clubbing_of_the_rete_ridges ,         elongation_of_the_rete_ridges ,         thinning_of_the_suprapapillary_epidermis ,         spongiform_pustule ,         munro_microabcess ,         focal_hypergranulosis ,         disappearance_of_the_granular_layer ,         vacuolisation_and_damage_of_basal_layer ,         spongiosis ,         sawtooth_appearance_of_retes ,         follicular_horn_plug ,         perifollicular_parakeratosis ,         inflammatory_monoluclear_inflitrate ,         bandlike_infiltrate ";                        List<string> zerofour = new List<string>();            string[] sarray = s.Split(',');            foreach(var item in sarray.ToList())
            {
                zerofour.Add(item.Trim());
            }
            if (zerofour.Any(x => x.Equals(pivotValue)))
            {                 return true;
            }            else                return false;    }        public string GetRandomRecord(Random r)
        {
            string sb="";
            
            string s = " erythema,scaling ,definite_borders ,itching ,koebner_phenomenon ,polygonal_papules ,follicular_papules , oral_mucosal_involvement , knee_and_elbow_involvement ,         scalp_involvement ,   family_history,   melanin_incontinence ,        eosinophils_in_the_infiltrate ,        PNL_infiltrate ,         fibrosis_of_the_papillary_dermis ,        exocytosis ,        acanthosis ,        hyperkeratosis ,         parakeratosis ,         clubbing_of_the_rete_ridges ,         elongation_of_the_rete_ridges ,         thinning_of_the_suprapapillary_epidermis ,         spongiform_pustule ,         munro_microabcess ,         focal_hypergranulosis ,         disappearance_of_the_granular_layer ,         vacuolisation_and_damage_of_basal_layer ,         spongiosis ,         sawtooth_appearance_of_retes ,         follicular_horn_plug ,         perifollicular_parakeratosis ,         inflammatory_monoluclear_inflitrate ,         bandlike_infiltrate ,Age   ,lastoffset";
            List<string> zerofour = new List<string>();
            string[] sarray = s.Split(',');
            foreach (var item in sarray.ToList())
            {
                zerofour.Add(item.Trim());
            }
            foreach (var item in zerofour)
            {
                
                Toolkit tk = new Toolkit();
                var intArray = tk.GetMinMaxValues(item);
                sb=sb+r.Next(intArray[0], intArray[1] + 1).ToString() + ",";
                
            }
            sb = sb.TrimEnd(',');
            sb = sb + System.Environment.NewLine;
            
            return sb.TrimEnd(',');

        }    }}