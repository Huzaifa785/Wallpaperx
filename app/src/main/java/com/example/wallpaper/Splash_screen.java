package com.example.wallpaper;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.WindowManager;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.TextView;

public class Splash_screen extends AppCompatActivity {
    ImageView logo;
    TextView appname;
    ///////// Animation///////////
    Animation topAnimation, bottomAnimationl;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_splash_screen);
        Thread timer = new Thread() {
            @Override
            public void run() {
                try {
                    sleep(5000);
                    Intent intent = new Intent(getApplicationContext(), MainActivity.class);
                    startActivity(intent);
                    finish();
                    super.run();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };

        timer.start();
        topAnimation = AnimationUtils.loadAnimation(this, R.anim.top_animation);
        bottomAnimationl = AnimationUtils.loadAnimation(this, R.anim.bottom_animation);

        appname = findViewById(R.id.appname);
        logo = findViewById(R.id.logo);

        logo.setAnimation(topAnimation);
        appname.setAnimation(bottomAnimationl);

    }
}