import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TabNameService {
    public tab1 = "Accueil";
    public tab2 = "Notifications";
    public tab3 = "Profil";
}